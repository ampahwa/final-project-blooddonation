import { Link } from 'react-router-dom'
import './Faq.css'






/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Faq = props => {
  return (
    <>
      <h1>FAQ!</h1>
      <p>
        Check out the <Link to="./eligibility">Eligibility</Link>.
      </p>
      <p>
        Check out the <Link to="./otherwaystohelp">Other Ways To Help</Link>.
      </p>
    </>
  )
}


// make this component available to be imported into any other file
export default Faq