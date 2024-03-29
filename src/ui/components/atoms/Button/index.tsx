import * as S from './styles'
import { type BtnProps } from './types'

const Button = ({ text, ...props }: BtnProps) => (
  <S.Container {...props}>{text}</S.Container>
)

export default Button
