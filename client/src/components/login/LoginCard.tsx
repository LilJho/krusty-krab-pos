import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AdminInfoTypes {
  username: string;
  pwd: string;
}

const LoginCard = () => {
  const [adminInfo, setAdminInfo] = useState<AdminInfoTypes>({
    username: "",
    pwd: "",
  });
  const navigate = useNavigate();

  const handleChange = (key: string, value: string) => {
    setAdminInfo((prevObj) => ({ ...prevObj, [key]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(adminInfo);

    setAdminInfo({
      username: "",
      pwd: "",
    });
    navigate("/orders");
  };

  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-center gap-4"
        >
          <div className="flex items-center justify-center gap-2">
            <label>Username:</label>
            <input
              autoComplete="off"
              className="p-2 border border-black rounded-sm"
              type="text"
              value={adminInfo.username}
              name="username"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <label>Password:</label>
            <input
              autoComplete="off"
              className="p-2 border border-black rounded-sm"
              type="password"
              value={adminInfo.pwd}
              name="pwd"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <Button variant={"outline"} type="submit">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
