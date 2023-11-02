import './myLabel.css';

interface MyLabelProps {
    /** 
     * Text to display
     */
    label: string;

    /**
     * Label size
     */
    size?: 'h1' | 'h2' | 'h3' | 'normal';

    /**
     * Capitalize all letters
     */
    allCaps?: boolean;

    /**
     * Label color 
     */
    color?: '' | 'text-primary' | 'text-secondary' | 'text-tertiary';

    /**
     * Font color
     */
    fontColor?: string;

    /**
     * Background color
     */
    backgroundColor?: string;
}

export const MyLabel = ({ label, size = 'normal', color = '', allCaps = false, fontColor, backgroundColor = 'transparent' }: MyLabelProps) => {
    return (
        <span className={`${size} ${color}`} style={{ color: fontColor, backgroundColor }}>{allCaps ? label.toUpperCase() : label}</span>
    );
};