import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-6  border-b-2 max-w-7xl mx-auto'>
            <h1 className="text-black text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;