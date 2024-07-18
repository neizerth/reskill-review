import S from './styles/Widget.module.scss'
export const Widget = ({ children }) => {
    return (
        <div className={S.widget}>{children}</div>
    )
};