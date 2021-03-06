import style from "./style.module.scss";
import { VscGithubInverted } from "react-icons/vsc";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);
  return (
    <div className={style.loginBoxWrapper}>
      <strong>Entre e compartilhe sua menssagem</strong>
      <a href={signInUrl} className={style.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com github
      </a>
    </div>
  );
}
