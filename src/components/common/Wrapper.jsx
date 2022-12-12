import React, { useState } from 'react';
import { createContext } from 'react';
import { IntlProvider } from 'react-intl';
import English from '../../Languages/en.json';
import Gujarati from '../../Languages/gj.json';
import Hindi from '../../Languages/hi.json';
import { flattenMessages } from '../../utils/utils';

export const Context = createContext();

const local = navigator.languages;

let lang;
if (local === 'gj') {
    lang = Gujarati;
} else if (local === 'hi') {
    lang = Hindi;
} else {
    lang = English;
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLang(e) {
        const newLocale = e.target.value;
        if (newLocale === 'gj') {
            setMessages(Gujarati);
        } else if (newLocale === 'hi') {
            setMessages(Hindi);
        } else {
            setMessages(English);
        }
        setLocale(newLocale);
    }

    return (
        <>
            <Context.Provider value={{ locale, selectLang }}>
                <IntlProvider messages={flattenMessages(messages)} locale={locale}>
                    {props.children}
                </IntlProvider>
            </Context.Provider>
        </>
    );
};

export default Wrapper;
