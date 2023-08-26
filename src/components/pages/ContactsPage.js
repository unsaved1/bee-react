import AppContactsPromo from "../appContactsPromo/AppContactsPromo";
import AppFooter from "../appFooter/AppFooter";
import contactsBg from '../../resources/images/main-bg.png';

const ContactsPage = () => {
    return (
        <>
            <AppContactsPromo
                bg={contactsBg}
                title='Контакты'
                text={
                    [
                        'Производитель:', 'КРЕСТЬЯНСКОЕ (ФЕРМЕРСКОЕ) ХОЗЯЙСТВО', 'ЖДАН МИХАИЛ СЕРГЕЕВИЧ',
                        '',
                        'ИНН: 422000438049', 'ОГРНИП: 317420500041419',
                        '',
                        'Написать нам в WhatsApp', 'Написать нам в Viber',
                        '',
                        'E-mail: zakaz@mishinapaseka.ru',
                        '',
                        ''
                        ]}/>
            <AppFooter/>
        </>
    )
};

export default ContactsPage;