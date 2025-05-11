import React from 'react';
import styled from 'styled-components';

const Switch = ({ onChange, checked }) => {
  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange();
  };

  return (
    <StyledWrapper onClick={handleToggle}>
      <div className="theme-toggle">
        <input 
          id="theme" 
          className="theme__toggle" 
          type="checkbox" 
          role="switch" 
          checked={checked}
          readOnly
          aria-label="Toggle theme"
        />
        <label htmlFor="theme" className="theme__label">
          <span className="theme__icon">
            {checked ? '🌙' : '☀️'}
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .theme-toggle {
    position: relative;
    display: inline-block;
    cursor: pointer;
    padding: 4px;
    border-radius: 20px;
    background: var(--surface);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(var(--primary-rgb), 0.1);
    }
  }

  .theme__toggle {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .theme__label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .theme__icon {
    font-size: 20px;
    line-height: 1;
    transition: transform 0.3s ease;
  }

  .theme-toggle:hover .theme__icon {
    transform: rotate(15deg);
  }
`;

export default Switch;
