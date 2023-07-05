import { useState } from 'react';
import Select from 'react-select';
import { themeOptions } from '../Utils/themeOptions';
import { useTheme } from '../Context/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const { setTheme, theme } = useTheme();

  const iconStyle = {
    cursor: 'pointer',
    fontSize: '2rem'
  }

  const handleChange = (e) =>{
    setTheme(e.value);

    localStorage.setItem('theme', JSON.stringify(e.value));
  }

  const handleGithub = (e) =>{
    window.open("https://github.com/Balajiw920", '_blank');
  }

  const handleLinkedin = () =>{
    window.open("", '_blank');
  }

  return (
    <div className="footer">
      <div className="links">
        <GitHubIcon style={iconStyle} onClick={handleGithub}/>
        <LinkedInIcon style={iconStyle} onClick={handleLinkedin} />
      </div>
      <div className="copyright">
        Copyright &#169; by Balaji Waghmare
      </div>

      <div className="themeButton">
        <Select
          onChange={handleChange}
          options={themeOptions}
          menuPlacement='top'
          defaultValue={{label: theme.label, value: theme}}
          styles ={{
            control: styles => ({
              ...styles,
              backgroundColor: theme.background, 
              color:theme.textColor
            }),
            menu: styles => ({...styles, backgroundColor: theme.background}),
            option: (styles, {isFocused}) => {
              return {
                ...styles,
                backgroundColor: (!isFocused ? theme.background : theme.textColor),
                color: (!isFocused ? theme.textColor : theme.background),
                cursor: 'pointer'
              }
            }
          }}
        />
      </div>
    </div>
  )
}

export default Footer
