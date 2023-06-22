interface Props {
    className: string;
    display: string;
    opacity: number;
}

const X = ({ className, display, opacity }: Props) => {
    return (
        <>
            <svg className={className} style={{ display: display, opacity: opacity }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path className="cls-1" d="m57.78,9.57l.5-.66c-.24-.08-.48-.19-.51-.41-.38-.26-.57-.83-.83-1.24-.15.06-.27.1-.35.1-.12-.15-.08-.31.02-.45.07-.09.16-.18.25-.26-.09,0-.18.01-.21-.07l-.35.35s-.06-.06-.06-.1v.17s.14.01.14.01c.09.04.08.13.07.21-.07.11-.16.08-.25.08l-.04.33c.18.32.63-.35.56.18l-.15.03c-.08.2-.26.39-.19.64-.43-.15-.17.62-.58.26-.72.35-1.11,1.36-2.06,1.48.17.36.69.87.78,1.43-.09,0-.2.03-.24-.05l-.02.31c.09-.09.19-.23.34-.17-.13.38.34.11.46.28l-.21.49.1.02c.71-.54,1.58-.92,2.35-1.41v-.03s.05,0,.05,0c.03-.02.07-.05.1-.07-.17-.37.1-.5.45-.68-.08-.08-.19-.14-.13-.27.58-.26.21-.21.35-.68-.09.09-.19.23-.32.19Z" />
                <path className="cls-1" d="m46.9,44.48c-.02-.24-.03-.47-.05-.71-.26-.28-.75-.61-.77-.85-.14-1.88-2.6-3.29-3.42-4.84-.55-1.03-1.54-1.69-2.1-2.96-.31-1.15-1.63-2.09-2.64-3.14l2.4-1.72.3.39c2.34-2.12,3.96-5.4,5.79-7.73.83-.98.21-2.15,1.59-1.6,2.44-1.17,3.26-4.6,4.9-6.47-.31-.3-.39-.87-.89-.71-.52,1.28-2.32,1.55-3.19.75l.42-.26-1.28-.08-.12.65c-.3-.11-.51-.23-.65-.35-.96.37-2.27.2-3.46.38-.26.71-.77,1.32-1.94,1.67l.31.3c-2.45,3.29-6.05,6.52-9.85,9.84-.27-.24-.53-.49-.82-.68-2.11-1.65-3.83-3.63-5.9-5.01l.15-.36c-.35-.07-.66-.18-.85-.02-.09-.05-.19-.1-.29-.16-.18-.47-.48-.7-1.02-.55-.1-.34.14-.29.12-.53-.44-.24-.84-.57-1.2-.95-.02-.2-.11-.43-.45-.74l-.11.09c-.97-1.29-1.56-2.92-1.49-4.12-1.4.19-1.51-1.22-2.48-1.64-.99-.66-2.44-1.17-2.75-2.16-.63-1.47-1.73-2.13-2.96-2.5-.04-.03-.06-.07-.1-.1-.07,0-.13.01-.2.01-1.45-.37-3.04-.38-4.29-.74-1.07,1.41-2.37,3.01-1.29,4.85.16.27.38.49.61.71.13.52.29,1.05.49,1.61.91.07,1.86.61,2.69,1.18,0,.09.01.17.02.26.22.04.49.15.75.28.25.19.5.38.7.53,1.63,2.57,3.64,4.36,5.66,6.14,1.52,1.46,3.49,2.53,5.41,3.44-.17.6-.34,1.49.18,2.06,1.1,1.39,2.41,3.3,4.22,3.73-1.53,1.4-3.04,2.82-4.44,4.29l-.99-1.31c-1.07,2.46-2.65,4.88-3.49,7.36l.84-.44c.05,1.22-1.05,3.13-2.12,3.91l-.21-.39c1.1-1.44-.18-.01-.49-1.34l.07-.37-.28-.02-.07.37c-.15-.2-.39-.4-.24-.67l-.33.26c-1.45-.18-2.15-.88-2.98-1.87-.05.28,1.02,1,.01,1.41l-.2-.39-.24,1.3-.73-.04c-.09.46-.06.84-.46,1.01l.52.69c-1.49,1.04-2.38,3.33-4.11,4.17.3.86-1.16.78-1.39,1.98l.95.34c1.65.1,2.99-2.17,4.56-3.11l.3.39c-.16.37-.06.84-.56,1l.52.69c2.67,1.57,1.8-2.71,2.57-2.85,1.55-.37.66,1.92,1.04,1.38-.25,1.86,2.38.61,3.54.87,2.65.16,4.68-3.29,6.29-4.98,1.17-3.95,5.73-6.08,8.39-8.43.05.03.09.07.14.1,0,0,0-.03,0-.04.48.68.96,1.35,1.49,1.93,1.25.94,2.07,2.49,3.13,3.08.77.32,1.28.78,1.76,1.25.05.1.09.2.12.31,0,.02.01.03.02.05,0,.02.03.05.03.07h.01c.06.12.12.24.22.34-.09-.12-.16-.24-.21-.36l.12-.1c.13.13.28.25.42.37.36.83.94,1.67.75,2.24.74-.23.23-.7-.18-1.15.5.46,1.15.96,1.62,1.53-.28-.14-.64-.1-.61-.59-.28.04-.36.21-.34.49.57.38,1.11,1.59,1.54,1.27.03.17.03.34,0,.51l.56-.08v.19c.04-.08.04-.16.06-.24.65.58,1.17,1.39,1.94,1.55.15-.05.26-.09.36-.13-.04.3-.29.09-.52.21.41.45.72.79,1.18.6l-.57-.85c.15-.07.26-.14.33-.21.45.04.82.08.83.22.34.8.42,1.58.44,2.34-.05.02-.09.05-.13.06-.19-.39-.55-.86-.68-1.05l.07.94.37-.02c.11.21-.07.36-.16.43l.06.04s-.05.06-.07.13l.13-.09.28.18c.1-.04.11-.14.1-.25-.08.58-.3,1.19.09,1.85.01,0,.04,0,.05-.01.06.4.16.8.34,1.19,0,.11.34.18.71.2.02.02.02.03.04.06.27.03.45,0,.58-.07.15-.02.27-.05.32-.09.23-.47.15-1.06.03-1.66l.09.09v-.09s-.06-.01-.09-.02c-.09-.48-.21-.95-.23-1.36.18-.44.25-.69.37-1.1.19-.66.92-.28,1.16-.24.54-2.21-1.73-4.28-3.29-6.2-.26-.28-.94.05-1.2-.23Zm1.03,7.65s-.03-.07-.05-.11l.07-.05s0,0,0,0c0,.05-.02.1-.02.15Z" />
                <path className="cls-1" d="m54.89,61.42c-.2-.13-.41-.45-.14-.58h-.47s.72.79.72.79c.06-.35-.04-.72.27-1.02l-.28-.37c.13.49-.03.83-.1,1.18Z" />
                <path className="cls-1" d="m55.45,60.76c.07.07.11.13.07.23.37-.11.25-.41.04-.73-.47-.09.52.28-.11.51Z" />
                <path className="cls-1" d="m55.27,60.6l.13.18s.03-.01.04-.02c-.05-.05-.11-.1-.15-.19-.01,0-.01.02-.02.03Z" />
                <path className="cls-1" d="m53.5,59.22c-.03.07-.08.13-.07.24.05-.05.07-.14.07-.24Z" />
                <path className="cls-1" d="m53.75,58.79l-.11-.21c-.19.09-.14.4-.15.64.17-.39.79-.29.49-1.13.02.28.04.56-.23.7Z" />
                <path className="cls-1" d="m55.43,58.56l-.19-.04.28,1.26c.43-.56-.22-.51-.09-1.22Z" />
                <path className="cls-1" d="m46.18,51.93l.06-.12s-.09,0-.14-.01c.02.04.04.08.08.13Z" />
                <path className="cls-1" d="m45.72,50.91l.16.87c.09,0,.14,0,.21.02-.24-.44.16-.61-.37-.88Z" />
                <path className="cls-1" d="m46.23,51.81c.73.16.29.98,1.08,1.46-.15-.77-.57-1.32-.97-1.67l-.11.22Z" />
                <path className="cls-1" d="m52.41,50.83c.49.37.17.85.74,1.25,0,0,.01,0,.02.01,0,0,0,0,0,0,.41-.75-.26-.98-.14-1.78l-.62.53Z" />
                <path className="cls-1" d="m49.02,44.51c.18-.15.09-1.28.63-.43-.21-.32-.62-.68-.06-.75-.41-.45-.44.38-.92.28.47,0,.23.6.35.9Z" />
                <path className="cls-1" d="m48.35,43.08c-.12-.3-.24-.7-.52-.66.21.22.06.75.52.66Z" />
                <polygon className="cls-1" points="49.11 41.94 49.06 42.58 49.3 41.97 49.11 41.94" />
                <path className="cls-1" d="m48.25,40.47c-.66-.18-.6.17-.45.61-.02-.14,0-.28.08-.4l.81.71-.45-.92Z" />
                <path className="cls-1" d="m47.94,41.44c.1.29.18.57.06.74l.38.07c.1-.09-.24-.43-.45-.81Z" />
                <path className="cls-1" d="m47.81,39.64l-.1-.11-.44.38c.29.15.46-.19.55-.27Z" />
                <path className="cls-1" d="m47.34,38.44c-.22-.41.16-.34.34-.49.06-.45-.61-.58-.81-.71-.05.55.25.79.47,1.2Z" />
                <path className="cls-1" d="m47.29,36.48l.62.68c.33-.58-.31-.43-.62-.68Z" />
                <path className="cls-1" d="m46.1,35.6c-.1-.02-.18.15-.37.11-.08.26.22.41.33.62l.04-.73Z" />
            </svg>
        </>
    );
}

export default X;