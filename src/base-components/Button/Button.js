import styled from 'styled-components'

const BaseButton = styled.button`
  background: transparent;
  background-color: ${props => props.backgroundColor || 'none'};
  border-radius: 3px;
  border: 2px solid #ccc;
  color: ${props => props.color || 'palevioletred'};
  cursor: pointer;
  margin: 0 0.5em;
  height: 2em;
  width: 2rem;
}
`;

const getIcon = (key) => {
  switch(key) {
    case 'delete':
      return '✖'
    case 'favorite':
      return '💗'
    case 'non-favorite':
      return '🖤'
    case 'left-most':
      return '⏮'
    case 'right-most':
      return '⏭'
    case 'previous':
      return '⏪'
    case 'next':
      return '⏩'
    case 'add':
      return '➕'
    default: 
      return null
  }
}

export const IconButton = ({ type, ...rest }) => {
  const icon = getIcon(type)
  return (
    <BaseButton {...rest} >{icon}</BaseButton>
  )
}

export const IconTextButton = ({ type, text, ...rest }) => {
  const icon = getIcon(type)
  return (
    <BaseButton {...rest} >
      <span>{text}</span>
      <span>{icon}</span>
    </BaseButton>
  )
}

export const Button = ({ text, ...rest }) => {
  return (
    <BaseButton {...rest}>{text}</BaseButton>
  )
}
