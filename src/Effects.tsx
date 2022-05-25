import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    const [mes, setMes] = useState(-1);

    function call(message: number) {
        setMes(message);
    }

    useEffect(() => {
        subscribe(props.sourceId, call);
        return () => {
            unsubscribe(props.sourceId, call);
            setMes(-1);
        };
    }, [props.sourceId]);

    return (
        <div>
            <p>
                {props.sourceId}: {mes}
            </p>
        </div>
    );
}
