import { useRef} from 'react'
function Subscribe() {
  const emailInputRef = useRef();
  function subscribeHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
  }

  return (
    <section className=" mb-12 mt-4 mx-auto w-11/12 max-w-xs">
      <form onSubmit={subscribeHandler}>
        <div className="flex">
          <input
            className="flex-1 text-inherit rounded-xl rounded-tr-none rounded-br-none border-2 border-none p-2"
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button className=" bg-black text-slate-400 font-semibold rounded-xl rounded-tl-none rounded-bl-none cursor-pointer px-2  hover:bg-slate-900 hover:text-slate-100">
            subscribe
          </button>
        </div>
      </form>
    </section>
  );
}

export default Subscribe;
