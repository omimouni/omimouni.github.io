import ThreeJSCanvas from "@/components/threejs-canvas";

export default function NotFound() {
    return <div className="h-screen flex justify-center items-center p-4">
        <div className="text-center">
            <h1 className="text-xl uppercase font-light">404 - Page Not Found</h1>
            <div className="aspect-square mt-5 md:w-96 w-64">
                <ThreeJSCanvas />
            </div>
        </div>
    </div>
}