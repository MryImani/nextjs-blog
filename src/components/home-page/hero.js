import classes from './hero.module.css'
import Subscribe from '../input/subscribe'
export default function Hero(){
    return (
      <section
        className={`${classes.hero} flex flex-col justify-center items-center pt-40 relative bottom-24`}
      >
        <h1 className="text-5xl font-bold">Hi, I'm Maryam</h1>
        <p className=" text-gray-500 font-semibold my-8 text-center">
          I blog about web development - especialy frontend frameworks like
          React or Vue.
        </p>
        <Subscribe/>
      </section>
    );
}