

type CoverAlign = 'left' | 'right' | 'center' | 'middle';

type CoverProps = {
    src: string;
    align?: CoverAlign;
    height: string;
    title?: string;
    subtitle?: string;
};

export const Cover = (props: CoverProps) => {
    const {
        src,
        align = 'center',
        height,
        title,
        subtitle,
    } = props;

    const justify = ((): 'flex-start' | 'center' | 'flex-end' => {
        const a = align === 'middle' ? 'center' : align;
        if (a === 'left') return 'flex-start';
        if (a === 'right') return 'flex-end';
        return 'center';
    })();

    const textAlign = ((): 'left' | 'center' | 'right' => {
        const a = align === 'middle' ? 'center' : align;
        if (a === 'left') return 'left';
        if (a === 'right') return 'right';
        return 'center';
    })();

    const backgroundImage = `url(${src})`;

    return (
        <div
            style={{
                position: 'relative',
                backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: height
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: justify === 'flex-start' ? 'flex-start' : justify === 'flex-end' ? 'flex-end' : 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    padding: '0 255px', // match $padding-sides from layout.scss
                    boxSizing: 'border-box',
                    textAlign: textAlign,
                    gap: '20px',
                }}
            >
                {title && (
                    <h1 className="style-h1" style={{ color: '#FFFFFF' }}>
                        {title}
                    </h1>
                )}
                {subtitle && (
                    <div className="style-h4-light" style={{ color: '#FFFFFF'}}>
                        {subtitle}
                    </div>
                )}
            </div>
        </div>


    );
};
