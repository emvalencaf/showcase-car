
// Component
import Message from "./Message.component";

const SubmitButton = ({loading, error, success, btnValue}) => {
  return (
    <>
        {!loading && <button type='submit'>{btnValue}</button>}
        {loading && <button type='submit' disabled>Aguarde...</button>}
        {error && <Message msg={error} type="error" />}
        {success && <Message msg={success} type="success" />}
    </>
  )
}

export default SubmitButton;