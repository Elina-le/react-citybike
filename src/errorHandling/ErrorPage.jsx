import { useErrorBoundary } from 'react-error-boundary';
import ErrorIcon from './ErrorIcon';
import styles from './ErrorPage.module.css';
import Button from '../components/Button';

export function ErrorPage({error}) {
    
    const { resetBoundary } = useErrorBoundary();
    return (
        <div className={styles.errorpage}>
            <ErrorIcon />
            <br />
            <div>
                <h1>Something went wrong</h1>
                <p>{error.message}</p>
            </div>
            <Button text="Let's try again" onClick={resetBoundary}/>
        </div>
    )
}