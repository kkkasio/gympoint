import * as Yup from 'yup';
import Plan from '~/app/models/Plan';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll({
      where: {
        canceled_at: null,
      },
    });

    if (!plans)
      return res.status(400).json({ error: 'This plan does not exits' });

    return res.json(plans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string()
        .required()
        .min(3),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const plan = await Plan.create(req.body);

    return res.json(plan);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().min(3),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const plan = await Plan.findByPk(req.params.id);

    if (!plan) {
      return res.status(400).json({ error: 'This plan does not exists' });
    }

    await plan.update(req.body);

    return res.json(plan);
  }

  async delete(req, res) {
    console.log(req.params);
    const plan = await Plan.findByPk(req.params.id);

    if (!plan || plan.canceled_at !== null)
      return res.status(400).json({ error: 'This plan not exists' });

    plan.canceled_at = new Date();

    await plan.save();

    return res.json(plan);
  }
}

export default new PlanController();
