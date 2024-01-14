import { ReactNode } from 'react';
import Styles from './sectionContainer.module.scss';

type Props = {
    title: string
    children: ReactNode
}

const SectionContainer = ({ title, children }: Props) => {
    return (
        <div className='row'>
            <div className='container'>
                <h2 className={Styles.title}>
                    {title}
                </h2>
                <div className={Styles.container}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SectionContainer