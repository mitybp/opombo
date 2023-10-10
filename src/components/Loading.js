import { LoadingContainer } from "../styled";

const Loading = ({visible}) => {
  return (
    <LoadingContainer style={{display: visible?'flex':'none'}}>
        <h1>Carregando...</h1>
    </LoadingContainer>
  );
};

export default Loading;
