const getVisibleContact = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase(); // що не було похибки, то підношу всі до великих букв
    // return
    const filteredContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)); // фільтрую і повертаю тільки ті контакти, які відповідають пошуку
    const firstNewContact = [...filteredContact].sort((a, b) => b.id - a.id);
    return firstNewContact
};

export default getVisibleContact;