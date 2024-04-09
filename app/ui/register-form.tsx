import { FormInput } from '../lib/definitions';

export default function RegisterForm() {
  let registerInputs: FormInput[] = [
    {
      label: 'nombre',
      type: 'text',
    },
    {
      label: 'apellido',
      type: 'text',
    },
    {
      label: 'email',
      type: 'email',
    },
    {
      label: 'fecha de nacimiento',
      type: 'date',
    },
    {
      label: 'contraseña',
      type: 'password',
    },
    {
      label: 'confirmar contraseña',
      type: 'password',
    },
  ];
  return (
    <>
      <form className="register-form">
        <div className="register-form-fields">
          {registerInputs.map((input: FormInput, i: number) => (
            <fieldset key={'field' + i}>
              <label key={'label' + 1}>{input.label}</label>
              <input key={'input' + i} type={input.type} />
            </fieldset>
          ))}
        </div>
      </form>
    </>
  );
}
