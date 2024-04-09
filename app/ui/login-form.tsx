import { FormInput } from '../lib/definitions';

export default function LoginForm() {
  let loginInputs: FormInput[] = [
    {
      label: 'Correo electrónico',
      type: 'text',
    },
    {
      label: 'Contraseña',
      type: 'password',
    },
  ];
  return (
    <>
      <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div className="mb-4">
          {loginInputs.map((input: FormInput, i: number) => (
            <fieldset key={'field' + i}>
              <label
                key={'label' + 1}
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                {input.label}
              </label>
              <input
                key={'input' + i}
                type={input.type}
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </fieldset>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </>
  );
}
