import CVagus from '../docs/CVagus.pdf';

function CV() {
 
        return (
            <div>
                {/* Replace 'CVagus.pdf' with the actual path to your PDF */}
                <iframe src={CVagus} width="100%" height="2200px" title="PDF Viewer"></iframe>
            </div>
        );
    };
    
    export default CV;