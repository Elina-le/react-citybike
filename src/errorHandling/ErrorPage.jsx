import { useErrorBoundary } from 'react-error-boundary';
import ErrorIcon from './ErrorIcon';
import styles from './ErrorPage.module.css';

export function ErrorPage({error}) {
    
    const { resetBoundary } = useErrorBoundary();
    return (
        <div className={styles.errorpage}>
            <ErrorIcon />
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <button onClick={resetBoundary}>Refresh page</button>
        </div>
    )
}