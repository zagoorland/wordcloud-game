import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { UserContext } from '../../contexts/UserContext';
import { Container, ErrorMessage, StyledForm } from './styles';

const Login = () => {
  const [userInput, setUserInput] = useState('');
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setUser({ name: userInput });
    navigate('/game');
  };

  return (
    <Container>
      <h1>Wordcloud game</h1>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your nickname here..."
          name="username"
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        {!userInput.length && <ErrorMessage>Nickname is required</ErrorMessage>}
        <Button disabled={!userInput.length}>Play</Button>
      </StyledForm>
    </Container>
  );
};

export default Login;
