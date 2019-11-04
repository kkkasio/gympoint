import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '~/app/models/User';
import authConfig from '~/config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validations fails' });

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user)
      return res.status(401).json({ error: 'Email or password is incorrect' });

    if (!(await user.checkPassword(password)))
      return res.status(401).json({ error: 'Email or password is incorrect' });

    const { id, name } = user;

    return res.json({
      user: { id, name, email },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
