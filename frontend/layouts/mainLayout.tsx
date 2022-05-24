import Header from "../components/header"

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Header title="Reach" links={[]} />
            <div className="container p-5 mx-auto">
                {children}
            </div>
            
        </>
    )
}

export default MainLayout