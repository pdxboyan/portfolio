import WriteupLayout from "./components/writeupTemplate";
import banner from "./articleAssets/FerrofluidVisualizer/banner.jpg";

export default function FerrofluidVisualizerWriteup() {
    return (
        <WriteupLayout
            title="Ferrofluid Sound Visualizer"
            date="12/11/24"
            image={banner}
            imageAlt="A top down view of the circuit - microcontroller, battery pack, electromagnet, ferrofluid."
            >

            <p>PLACEHOLDER P</p>
        </WriteupLayout>
    );
}