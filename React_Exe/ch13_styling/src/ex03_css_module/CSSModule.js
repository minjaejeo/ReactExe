// import styles from './CSSModule.module.css';
import styless from './CSSModule.module.css';

const CSSModule =() => {
    console.log(styless);
    console.log(styless.wrapper);
    return(
        <div className={styless.wrapper}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>

        </div>
    );
};

export default CSSModule;