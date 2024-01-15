import { ReactNode } from 'react';
import Styles from './sectionContainer.module.scss';
import { Container, Row } from 'react-bootstrap';

type Props = {
    title: string
    children: ReactNode
}

const SectionContainer = ({ title, children }: Props) => {
    return (
        <Row>
            <Container>
                <div className={Styles.sectionContainer}>
                    <h2 className={Styles.title}>
                        {title}
                    </h2>
                    <div className={Styles.container}>
                        {children}
                    </div>
                </div>
            </Container>
        </Row>
    )
}

export default SectionContainer