import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
{['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a className="app__navigation-dot p-text" key={item+index} href={`#${item}`}
       style={active === item ? {backgroundColor: '#313bac', color: '#000'} : {}}
        />
           
            
         
        ))}

    </div>
  )
}

export default NavigationDots