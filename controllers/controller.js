exports.first_api = async(req, res) => {
    try{
        let x = 4;
        
        res.send(x.toString());
    }
    catch(err){
        console.log('could not get data');
    }
}

exports.second_api = async(req,res) => {
    try{
        let x = 5.3;
        res.send(x.toString());
    }
    catch(err){
        console.log('could not get data');
    }
}

exports.third_api = async(req,res) => {
    try{
        let x = [4,5.3,6.9,4.0,3.3];
        res.send(x.toString());
    }
    catch(err){
        console.log('could not get data');
    }
}

exports.fourt_api = async(req,res) => {
    try{
        let x = [3,4.2,9.8,6];
        let time = new Date();
        let h = time.getHours().toString();
        let m = time.getMinutes().toString();
        let s = time.getSeconds().toString();
        res.write(x.toString()+'\n');
        res.write(`${h}:${m}:${s}`);
        res.send();
    }
    catch(err){
        console.log('could not get data');
    }
}