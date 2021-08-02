import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import supabase from '@utils/index'

const Login = () => {

  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google'
    });
  }

  return (
    <div className="flex flex-col mx-auto h-[90vh] w-[50%] items-center justify-center">
      <Icon name="description" color="lightBlue" size="9xl" />
      <h1 className="text-gray-500 text-4xl font-mono font-extralight pt-3">
        <span className="font-semibold">Google</span> Docs
      </h1>
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signInWithGoogle}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
