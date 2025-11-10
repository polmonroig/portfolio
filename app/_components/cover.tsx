

import Image from 'next/image';

type CoverAlign = 'left' | 'right' | 'center' | 'middle';

type CoverProps = {
    src: string;
    align?: CoverAlign;
    opacity?: number;
    height: string;
    title?: string;
    subtitle?: string;
};

export const Cover = (props: CoverProps) => {
    const {
        src,
        align = 'center',
        opacity = 1,
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

    const imageFilter = opacity < 1 ? `brightness(${opacity * 100}%)` : undefined;

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: height,
                backgroundColor: 'black',
                overflow: 'hidden',
            }}
        >
            {/* Background image using next/image to leverage optimization and proper layout */}
            <Image
                src={src}
                alt=""
                aria-hidden
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: imageFilter,
                    zIndex: 0,
                }}
            />
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '1424px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: justify === 'flex-start' ? 'flex-start' : justify === 'flex-end' ? 'flex-end' : 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    padding: '0 255px', // match $padding-sides from layout.scss
                    boxSizing: 'border-box',
                    textAlign: textAlign,
                    margin: 'auto',
                    gap: '20px',
                }}
            >
                {title && (
                    <h1 className="style-h1" style={{ color: '#FFFFFF', filter: 'none'}}>
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
