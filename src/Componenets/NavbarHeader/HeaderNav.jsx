import React,{useState} from 'react'
import logo from '../../Assets/logo.png'
import search from '../../Assets/search.webp'
import './headerNav.css'
import logoSmall from '../../Assets/logo-small.png'

function HeaderNav({ onSearch }) {

    const [query, setQuery] = useState('');

    const handleChange = (event) => {
      setQuery(event.target.value);
      onSearch(event.target.value);
    };

  return (
      <>
          <div className='navbar-header'>
              <ul className='nav-header-wrap'> 
                  <li className='nav-elements'>
                      <img src={logo} alt='logo' className='logo' />
                      <img src={logoSmall} alt='logo' className='logo-small' />
                  </li>
                  <li className='nav-elements'>
                  <div className="search-bar">
                      <input
                         type="text"
                         value={query}
                         onChange={handleChange}
                         placeholder=""
                         className='serach-box'
                      />
                      
                          <img src={search} alt='search' className='search-icon'/>
                      </div>
                  </li>
                  <div className='language-btns'>
                     <li className='navbar-elements'> <button className='language-btn'>සිංහල</button></li>
                      <li className='navbar-elements'> <button className='language-btn'>தமிழ்</button></li>
                      <li className='navbar-elements'> <button className='language-btn-small'>සි</button></li>
                  <li className='navbar-elements'> <button  className='language-btn-small'>த</button></li>
                  </div>
                  
              </ul>
          </div>
      </>
  )
}

export default HeaderNav