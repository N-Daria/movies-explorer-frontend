import './Authorization.css';
import logo from '../../images/logo.svg';

export default function Authorization(props) {
  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({

    });
  }

  return (

    <section className={`authorization`}>
      <img src={logo} alt='логотип' className="authorization__logo" />
      <h2 className='authorization__header'>{props.header}</h2>
      <form name={props.formName} onSubmit={handleSubmit}>

        {props.children}

        <button className="authorization__button button" type="submit">{props.buttonText}</button>
        <a className='authorization__link link' href={props.redirect}>{props.linktext}
          <span className='authorization__link-span'>{props.redirectText}</span>
        </a>
      </form>

    </section>
  );
}; 