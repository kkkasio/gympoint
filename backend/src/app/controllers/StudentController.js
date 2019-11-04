import * as Yup from 'yup';
import Student from '~/app/models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();

    return res.json(students);
  }

  async show(req, res) {
    const { studentId } = req.params;

    const student = await Student.findByPk(studentId);
    return res.json(student);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .min(5),
      email: Yup.string()
        .required()
        .email(),
      birthday: Yup.date().required(),
      weight: Yup.string().required(),
      height: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validations fails' });

    const studentExists = await Student.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (studentExists)
      return res.status(400).json({ error: 'Student already exists' });

    const { id, name, email } = await Student.create(req.body);

    return res.json({
      student: {
        id,
        name,
        email,
      },
    });
  }
}

export default new StudentController();
