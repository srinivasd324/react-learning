export default function Input({ label, error, ...props }) {
    return (
        <div className="control no-margin">
            <label htmlFor="email">{label}</label>
            <input
                {...props}
            />
            <div className="control-error">
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}