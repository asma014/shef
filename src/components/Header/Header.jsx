const Header = () => {
    return (
        <header className="max-w-[85%] mx-auto">

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      
    </div>
    <a className="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-gray-600">
      <li><a>Home</a></li>
      <li><a>Recipe</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>

  <div className="navbar-end gap-10">

  <label className="input input-bordered flex items-center gap-2 h-10 rounded-3xl">
  <input type="text" className="" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 bg-[#0BE58A] rounded-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

  </div>
</div>

<div className="p-3">
<div className="hero min-h-screen  rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/23kCKJb/chef-cooking.jpg)'}}>
  <div className="hero-overlay bg-opacity-50  rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <div className="flex justify-center gap-4">
     <button className="btn btn-accent w-[8rem] rounded-3xl bg-[#0BE58A] text-black border-none">Explore Now</button>
     <button className="btn rounded-3xl bg-transparent border-2 text-white">Our Feedback</button>
     </div>
    </div>
  </div> 
</div>
</div>

<div className="m-[5rem]">
<h2 className="text-2xl font-bold text-center my-5">Our Recipes</h2>
<p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa repellendus. Inventore, laboriosam? Magni mollitia quo perspiciatis. Exercitationem sequi inventore odit enim. Optio fugit sed iusto nemo. Veritatis, placeat vel.</p>
</div>



        </header>
    );
};

export default Header;





