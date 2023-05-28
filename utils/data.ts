type FooterItemsType = {
    id: number,
    title: string,
    items: {
        id: number,
        name: string,
        link: string
    }[]
}[]
export const footerItems: FooterItemsType = [
    {
        id: 1, title: 'Column One',
        items: [
            { id: 1, name: 'Link One', link: '/' },
            { id: 2, name: 'Link Two', link: '/' },
            { id: 3, name: 'Link Three', link: '/' },
            { id: 4, name: 'Link Four', link: '/' },
            { id: 5, name: 'Link Five', link: '/' },
        ]
    },
    {
        id: 2, title: 'Column Two',
        items: [
            { id: 1, name: 'Link Six', link: '/' },
            { id: 2, name: 'Link Seven', link: '/' },
            { id: 3, name: 'Link Eight', link: '/' },
            { id: 4, name: 'Link Nine', link: '/' },
            { id: 5, name: 'Link Ten', link: '/' },
        ]
    },
    {
        id: 3, title: 'Column Three',
        items: [
            { id: 1, name: 'Link Eleven', link: '/' },
            { id: 2, name: 'Link Twelve', link: '/' },
            { id: 3, name: 'Link Thirteen', link: '/' },
            { id: 4, name: 'Link Fourteen', link: '/' },
            { id: 5, name: 'Link Fifteen', link: '/' },
        ]
    },
    {
        id: 4, title: 'Column Four',
        items: [
            { id: 1, name: 'Link Sixteen', link: '/' },
            { id: 2, name: 'Link Seventeen', link: '/' },
            { id: 3, name: 'Link Eightteen', link: '/' },
            { id: 4, name: 'Link Nineteen', link: '/' },
            { id: 5, name: 'Link Twenty', link: '/' },
        ]
    },
    {
        id: 5, title: 'Column Five',
        items: [
            { id: 1, name: 'Link Twenty One', link: '/' },
            { id: 2, name: 'Link Twenty Two', link: '/' },
            { id: 3, name: 'Link Twenty Three', link: '/' },
            { id: 4, name: 'Link Twenty Four', link: '/' },
            { id: 5, name: 'Link Twenty Five', link: '/' },
        ]
    },
    {
        id: 6, title: 'Column Six',
        items: [
            { id: 1, name: 'Link Twenty Six', link: '/' },
            { id: 2, name: 'Link Twenty Seven', link: '/' },
            { id: 3, name: 'Link Twenty Eight', link: '/' },
            { id: 4, name: 'Link Twenty Nine', link: '/' },
            { id: 5, name: 'Link Thirty', link: '/' },
        ]
    },
]

type DataType = {

    title: string;
    content: string;
    author: number;
    category: number;
    subcategory: number;
    banner: string;
    type: string;
    published_date: Date;
    read_time: string,
    share_post: string

}[]

export const blogs: DataType = [
    {
        title: 'Introduction to JavaScript',
        content: 'JavaScript is a programming language...',
        author: 1,
        category: 1,
        subcategory: 1,
        banner: 'https://i.ibb.co/d6My4M4/Image.png',
        type: 'general',
        published_date: new Date(),
        read_time: '5 Min',
        share_post: "Share this title"
    },
    {
        title: 'Exploring the Solar System',
        content: 'The solar system is a fascinating place...',
        author: 2,
        category: 2,
        subcategory: 4,
        banner: 'https://i.ibb.co/BL868QC/Image.png',
        type: 'general',
        published_date: new Date(),
        read_time: '5 Min',
        share_post: "Share this title"
    },
    {
        title: '10 Tips for Successful Entrepreneurship',
        content: 'Starting your own business can be challenging...',
        author: 3,
        category: 3,
        subcategory: 7,
        banner: 'https://i.ibb.co/0F5skzc/Image.png',
        type: 'sponsored',
        published_date: new Date(),
        read_time: '5 Min',
        share_post: "Share this title"
    },
    {
        title: '5 Essential Fitness Exercises',
        content: 'Maintaining physical fitness is important...',
        author: 4,
        category: 4,
        subcategory: 10,
        banner: 'https://i.ibb.co/Y8fQX4Y/Image.png',
        type: 'general',
        published_date: new Date(),
        read_time: '5 Min',
        share_post: "Share this title"
    },
    {
        title: 'The Thrill of Football',
        content: 'Football is a popular sport played worldwide...',
        author: 5,
        category: 5,
        subcategory: 13,
        banner: 'https://i.ibb.co/Syc7WGn/Image.png',
        type: 'general',
        published_date: new Date(),
        read_time: '5 Min',
        share_post: "Share this title"
    },
    {
        title: 'Web Development Trends for 2023',
        content: 'Stay updated with the latest web development trends...',
        author: 1,
        category: 1,
        subcategory: 2,
        banner: 'https://i.ibb.co/3BpBrsN/Image.png',
        type: 'general',
        published_date: new Date(),
        read_time: '5 Min',
        share_post: "Share this title"
    },
    {
        title: 'Exploring the Galaxy',
        content: 'Galaxies are vast systems of stars...',
        author: 3,
        category: 2,
        subcategory: 5,
        banner: 'https://i.ibb.co/k1rXMdQ/Image.png',
        type: 'general',
        published_date: new Date(),
        read_time: '5 Min',
        share_post: "Share this title"
    },
    {
        title: 'Mastering SEO Techniques',
        content: "Improve your website's visibility with SEO...",
        author: 2,
        category: 3,
        subcategory: 8,
        banner: 'https://i.ibb.co/X4yFrh1/Image.png',
        type: 'general',
        published_date: new Date(),
        read_time: '5 Min',
        share_post: "Share this title"
    },
    {
        title: 'Delicious Recipes for Desserts',
        content: 'Indulge in these mouthwatering dessert recipes...',
        author: 4,
        category: 4,
        subcategory: 11,
        banner: 'https://i.ibb.co/wwKfMSp/Image.png',
        type: 'general',
        published_date: new Date(),
        read_time: '5 Min',
        share_post: "Share this title"
    },
    {
        title: 'The Art of Landscape Photography',
        content: 'Capture stunning landscapes with your camera...',
        author: 5,
        category: 5,
        subcategory: 14,
        banner: 'https://i.ibb.co/3BpBrsN/Image.png',
        type: 'general',
        published_date: new Date(),
        read_time: '5 Min',
        share_post: "Share this title"
    },
]

export const categories = [
    {
        _id: 1,
        name: 'Technology',
    },
    {
        _id: 2,
        name: 'Science',
    },
    {
        _id: 3,
        name: 'Business',
    },
    {
        _id: 4,
        name: 'Health',
    },
    {
        _id: 5,
        name: 'Sports',
    },
]

export const subcategories = [
    {
        _id: 1,
        name: 'Programming',
        category: 1,
    },
    {
        _id: 2,
        name: 'Cybersecurity',
        category: 1,
    },
    {
        _id: 3,
        name: 'Gadgets',
        category: 1,
    },
    {
        _id: 4,
        name: 'Astronomy',
        category: 2,
    },
    {
        _id: 5,
        name: 'Biology',
        category: 2,
    },
    {
        _id: 6,
        name: 'Chemistry',
        category: 2,
    },
    {
        _id: 7,
        name: 'Finance',
        category: 3,
    },
    {
        _id: 8,
        name: 'Marketing',
        category: 3,
    },
    {
        _id: 9,
        name: 'Entrepreneurship',
        category: 3,
    },
    {
        _id: 10,
        name: 'Fitness',
        category: 4,
    },
    {
        _id: 11,
        name: 'Nutrition',
        category: 4,
    },
    {
        _id: 12,
        name: 'Mental Health',
        category: 4,
    },
    {
        _id: 13,
        name: 'Football',
        category: 5,
    },
    {
        _id: 14,
        name: 'Basketball',
        category: 5,
    },
    {
        _id: 15,
        name: 'Tennis',
        category: 5,
    },
]

export const users = [
    {
        _id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        username: 'johndoe',
        password: 'Password@1234',
        bio: 'Software Developer passionate about coding',
        avatar: getRandomAvatar(),
        website: 'https://johndoe.com',
        socialMedia: {
            twitter: 'https://twitter.com/johndoe',
            instagram: 'https://instagram.com/johndoe',
            facebook: 'https://facebook.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
        },
    },
    {
        _id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        username: 'janesmith',
        password: 'Password@1234',
        bio: 'Web Designer with a love for beautiful interfaces',
        avatar: getRandomAvatar(),
        website: 'https://janesmithdesigns.com',
        socialMedia: {
            twitter: 'https://twitter.com/janesmith',
            instagram: 'https://instagram.com/janesmith',
            facebook: 'https://facebook.com/janesmith',
            linkedin: 'https://linkedin.com/in/janesmith',
        },
    },
    {
        _id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        username: 'mikejohnson',
        password: 'Password@1234',
        bio: 'Digital Marketer and SEO enthusiast',
        avatar: getRandomAvatar(),
        website: 'https://mikejohnsonmarketing.com',
        socialMedia: {
            twitter: 'https://twitter.com/mikejohnson',
            instagram: 'https://instagram.com/mikejohnson',
            facebook: 'https://facebook.com/mikejohnson',
            linkedin: 'https://linkedin.com/in/mikejohnson',
        },
    },
    {
        _id: 4,
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        username: 'emilydavis',
        password: 'Password@1234',
        bio: 'Photographer capturing moments with passion',
        avatar: getRandomAvatar(),
        website: 'https://emilydavisphotography.com',
        socialMedia: {
            twitter: 'https://twitter.com/emilydavis',
            instagram: 'https://instagram.com/emilydavis',
            facebook: 'https://facebook.com/emilydavis',
            linkedin: 'https://linkedin.com/in/emilydavis',
        },
    },
    {
        _id: 5,
        name: 'David Wilson',
        email: 'david.wilson@example.com',
        username: 'davidwilson',
        password: 'Password@1234',
        bio: 'Travel enthusiast exploring the world',
        avatar: getRandomAvatar(),
        website: 'https://davidwilsontravels.com',
        socialMedia: {
            twitter: 'https://twitter.com/davidwilson',
            instagram: 'https://instagram.com/davidwilson',
            facebook: 'https://facebook.com/davidwilson',
            linkedin: 'https://linkedin.com/in/davidwilson',
        },
    },
]


function getRandomAvatar() {
    let type = ['men', 'women']

    // Generate a random index based on the length of the array
    const randomTypeIndex = Math.floor(Math.random() * type.length)

    // Generate random data within [0-50]
    const randomAge = Math.floor(Math.random() * 50)

    //Generate random user avatar from randomuser.me
    let avatar = `https://randomuser.me/api/portraits/${type[randomTypeIndex]}/${randomAge}.jpg`

    return avatar
}