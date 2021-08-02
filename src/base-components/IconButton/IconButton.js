import styled from 'styled-components'

const IconBaseButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 2em;
  height: 2em;
  width: 2rem;
}
`;

const getIcon = (key) => {
  switch(key) {
    case 'delete':
      return '✖'
    case 'favourite':
      return '💗'
    case 'non-favourite':
      return '🖤'
    default: 
      return null
  }
}

const IconButton = ({ type }) => {
  const icon = getIcon(type)
  return (
    <IconBaseButton>{icon}</IconBaseButton>
  )
}

export default IconButton