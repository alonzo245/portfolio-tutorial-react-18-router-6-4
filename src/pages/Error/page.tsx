import { useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  const error: any = useRouteError();
  return (
    <div>
      <span>Ohh oh...</span>
      {error && error?.message}
    </div>
  );
};

export default Error;
