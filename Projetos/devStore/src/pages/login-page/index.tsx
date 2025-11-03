import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/auth.context";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const handleClick = () => {
    login().then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <div>
      <h1>Page - Login</h1>
      <Button onClick={handleClick}>Log in</Button>
    </div>
  );
};
