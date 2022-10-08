import { ChildAsFC } from './Child'

const Parent = () => {
  return <ChildAsFC onClick={() => console.log('Clicked')} color="red" >
      lsoe
    </ChildAsFC>;
}

export default Parent;