import * as C from './styles';
export type ResumeItemProps = {
    title: string;
    value: number;
};

export const ResumeItem = ({ title, value }: ResumeItemProps) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={value > 0 ? "primary" : "secondary"} >${value}</C.Info>
        </C.Container>
    );
};