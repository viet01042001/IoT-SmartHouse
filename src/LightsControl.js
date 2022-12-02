import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_ngoaihien = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhatren.json"
const addr_phongkhach = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhatren.json"
const addr_phongngu1 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhatren.json"
const addr_phongngu2 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhatren.json"
const addr_phongtulanh = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhatren.json"
const addr_san1 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/ngoaisan.json"
const addr_san2 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/ngoaisan.json"
const addr_san3 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/ngoaisan.json"
const addr_san4 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/ngoaisan.json"
const addr_bep1 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhaduoi.json"
const addr_bep2 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhaduoi.json"
const addr_nhatam = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhaduoi.json"
const addr_kho = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhaduoi.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#4d4d4d'
const BACKGROUND_COLOR_LIGHT_ON = '#d3e805'

const on_ngoaihien = async () => {
    const responseNgoaihien = await fetch(addr_ngoaihien,
    {
        method: 'PATCH',
        body: JSON.stringify({light_ngoaihien: 1}),
    }
    );
};

const off_ngoaihien = async () => {
    const responseNgoaihien = await fetch(addr_ngoaihien,
    {
        method: 'PATCH',
        body: JSON.stringify({light_ngoaihien: 0}),
    }
    );
};

const on_phongkhach = async () => {
    const responseNgoaihien = await fetch(addr_phongkhach,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongkhach: 1}),
    }
    );
};

const off_phongkhach = async () => {
    const responseNgoaihien = await fetch(addr_phongkhach,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongkhach: 0}),
    }
    );
};

const on_phongngu1 = async () => {
    const responsePhongngu1 = await fetch(addr_phongngu1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongngu1: 1}),
    }
    );
};

const off_phongngu1 = async () => {
    const responsePhongngu1 = await fetch(addr_phongngu1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongngu1: 0}),
    }
    );
};

const on_phongngu2 = async () => {
    const responsePhongngu2 = await fetch(addr_phongngu2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongngu2: 1}),
    }
    );
};

const off_phongngu2 = async () => {
    const responsePhongngu2 = await fetch(addr_phongngu2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongngu2: 0}),
    }
    );
};

const on_phongtulanh = async () => {
    const responsePhongtulanh = await fetch(addr_phongtulanh,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongtulanh: 1}),
    }
    );
};

const off_phongtulanh = async () => {
    const responsePhongtulanh = await fetch(addr_phongtulanh,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongtulanh: 0}),
    }
    );
};

const on_san1 = async () => {
    const responseSan1 = await fetch(addr_san1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san1: 1}),
    }
    );
};

const off_san1 = async () => {
    const responseSan1 = await fetch(addr_san1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san1: 0}),
    }
    );
};

const on_san2 = async () => {
    const responseSan2 = await fetch(addr_san2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san2: 1}),
    }
    );
};

const off_san2 = async () => {
    const responseSan2 = await fetch(addr_san2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san2: 0}),
    }
    );
};

const on_san3 = async () => {
    const responseSan3 = await fetch(addr_san3,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san3: 1}),
    }
    );
};

const off_san3 = async () => {
    const responseSan3 = await fetch(addr_san3,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san3: 0}),
    }
    );
};

const on_san4 = async () => {
    const responseSan4 = await fetch(addr_san4,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san4: 1}),
    }
    );
};

const off_san4 = async () => {
    const responseSan4 = await fetch(addr_san4,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san4: 0}),
    }
    );
};

const on_bep1 = async () => {
    const responseBep1 = await fetch(addr_bep1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_bep1: 1}),
    }
    );
};

const off_bep1 = async () => {
    const responseBep1 = await fetch(addr_bep1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_bep1: 0}),
    }
    );
};

const on_bep2 = async () => {
    const responseBep2 = await fetch(addr_bep2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_bep2: 1}),
    }
    );
};

const off_bep2 = async () => {
    const responseBep2 = await fetch(addr_bep2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_bep2: 0}),
    }
    );
};

const on_nhatam = async () => {
    const responseNhatam = await fetch(addr_nhatam,
    {
        method: 'PATCH',
        body: JSON.stringify({light_nhatam: 1}),
    }
    );
};

const off_nhatam = async () => {
    const responseNhatam = await fetch(addr_nhatam,
    {
        method: 'PATCH',
        body: JSON.stringify({light_nhatam: 0}),
    }
    );
};

const on_kho = async () => {
    const responseKho = await fetch(addr_kho,
    {
        method: 'PATCH',
        body: JSON.stringify({light_kho: 1}),
    }
    );
};

const off_kho = async () => {
    const responseKho = await fetch(addr_kho,
    {
        method: 'PATCH',
        body: JSON.stringify({light_kho: 0}),
    }
    );
};


export default function LightsControl() {

    const [isEnable_ngoaihien, setIsEnable_ngoaihien] = useState(false);
    const [backgroundColorngoaihien, setBackgroundColorngoaihien] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_ngoaihien = () => {
        if (isEnable_ngoaihien)
        {
            off_ngoaihien()
            setBackgroundColorngoaihien(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_ngoaihien()
            setBackgroundColorngoaihien(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_ngoaihien(previousState => !previousState)
    }

    const [isEnable_phongkhach, setIsEnable_phongkhach] = useState(false)
    const [backgroundColorphongkhach, setBackgroundColorphongkhach] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_phongkhach = () => {
        if (isEnable_phongkhach)
        {
            off_phongkhach()
            setBackgroundColorphongkhach(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_phongkhach()
            setBackgroundColorphongkhach(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_phongkhach(previousState => !previousState)
    }

    const [isEnable_phongngu1, setIsEnable_phongngu1] = useState(false)
    const [backgroundColorphongngu1, setBackgroundColorphongngu1] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_phongngu1 = () => {
        if (isEnable_phongngu1)
        {
            off_phongngu1()
            setBackgroundColorphongngu1(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_phongngu1()
            setBackgroundColorphongngu1(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_phongngu1(previousState => !previousState)
    }

    const [isEnable_phongngu2, setIsEnable_phongngu2] = useState(false)
    const [backgroundColorphongngu2, setBackgroundColorphongngu2] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_phongngu2 = () => {
        if (isEnable_phongngu2)
        {
            off_phongngu2()
            setBackgroundColorphongngu2(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_phongngu2()
            setBackgroundColorphongngu2(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_phongngu2(previousState => !previousState)
    }

    const [isEnable_phongtulanh, setIsEnable_phongtulanh] = useState(false)
    const [backgroundColorphongtulanh, setBackgroundColorphongtulanh] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_phongtulanh = () => {
        if (isEnable_phongtulanh)
        {
            off_phongtulanh()
            setBackgroundColorphongtulanh(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_phongtulanh()
            setBackgroundColorphongtulanh(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_phongtulanh(previousState => !previousState)
    }

    const [isEnable_san1, setIsEnable_san1] = useState(false)
    const [backgroundColorsan1, setBackgroundColorsan1] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_san1 = () => {
        if (isEnable_san1)
        {
            off_san1()
            setBackgroundColorsan1(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_san1()
            setBackgroundColorsan1(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_san1(previousState => !previousState)
    }

    const [isEnable_san2, setIsEnable_san2] = useState(false)
    const [backgroundColorsan2, setBackgroundColorsan2] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_san2 = () => {
        if (isEnable_san2)
        {
            off_san2()
            setBackgroundColorsan2(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_san2()
            setBackgroundColorsan2(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_san2(previousState => !previousState)
    }

    const [isEnable_san3, setIsEnable_san3] = useState(false)
    const [backgroundColorsan3, setBackgroundColorsan3] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_san3 = () => {
        if (isEnable_san3)
        {
            off_san3()
            setBackgroundColorsan3(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_san3()
            setBackgroundColorsan3(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_san3(previousState => !previousState)
    }

    const [isEnable_san4, setIsEnable_san4] = useState(false)
    const [backgroundColorsan4, setBackgroundColorsan4] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_san4 = () => {
        if (isEnable_san4)
        {
            off_san4()
            setBackgroundColorsan4(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_san4()
            setBackgroundColorsan4(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_san4(previousState => !previousState)
    }

    const [isEnable_bep1, setIsEnable_bep1] = useState(false)
    const [backgroundColorbep1, setBackgroundColorbep1] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_bep1 = () => {
        if (isEnable_bep1)
        {
            off_bep1()
            setBackgroundColorbep1(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_bep1()
            setBackgroundColorbep1(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_bep1(previousState => !previousState)
    }

    const [isEnable_bep2, setIsEnable_bep2] = useState(false)
    const [backgroundColorbep2, setBackgroundColorbep2] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_bep2 = () => {
        if (isEnable_bep2)
        {
            off_bep2()
            setBackgroundColorbep2(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_bep2()
            setBackgroundColorbep2(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_bep2(previousState => !previousState)
    }

    const [isEnable_nhatam, setIsEnable_nhatam] = useState(false)
    const [backgroundColornhatam, setBackgroundColornhatam] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_nhatam = () => {
        if (isEnable_nhatam)
        {
            off_nhatam()
            setBackgroundColornhatam(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_nhatam()
            setBackgroundColornhatam(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_nhatam(previousState => !previousState)
    }

    const [isEnable_kho, setIsEnable_kho] = useState(false)
    const [backgroundColorkho, setBackgroundColorkho] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_kho = () => {
        if (isEnable_kho)
        {
            off_kho()
            setBackgroundColorkho(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_kho()
            setBackgroundColorkho(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_kho(previousState => !previousState)
    }

    return(
        <View style={styles.container}>

            <View style={styles.place}>
                <Text style={styles.textplace}> NHÀ TRÊN </Text>
            </View>

            <View style={styles.place}>
                <Text style={styles.textplace}> NGOÀI SÂN </Text>
            </View>
            
            <View style={styles.box}>
                <Button title="NGOÀI HIÊN" onPress={function() {toggleSwitch_ngoaihien()}} color={backgroundColorngoaihien}/> 
            </View>

            <View style={styles.box}>
                <Button title="SÂN 4" onPress={() => {toggleSwitch_san4()}} color={backgroundColorsan4}/> 
            </View>
            <View style={styles.box}>
                <Button title="PHÒNG KHÁCH" onPress={() => {toggleSwitch_phongkhach()}} color={backgroundColorphongkhach}/> 
            </View>
            <View style={styles.box}>
                <Button title="SÂN 3" onPress={() => {toggleSwitch_san3()}} color={backgroundColorsan3}/>
            </View>
            <View style={styles.box}>
                <Button title="PHÒNG NGỦ 1" onPress={() => {toggleSwitch_phongngu1()}} color={backgroundColorphongngu1}/>
            </View>
            <View style={styles.box}>
                <Button title="SÂN 2" onPress={() => {toggleSwitch_san2()}} color={backgroundColorsan2}/>
            </View>
            <View style={styles.box}>
                <Button title="PHÒNG NGỦ 2" onPress={() => {toggleSwitch_phongngu2()}} color={backgroundColorphongngu2}/>
            </View>
            <View style={styles.box}>
                <Button title="SÂN 1" onPress={() => {toggleSwitch_san1()}} color={backgroundColorsan1}/>
            </View>
            <View style={styles.box}>
                <Button title="PHÒNG TỦ LẠNH" onPress={() => {toggleSwitch_phongtulanh()}} color={backgroundColorphongtulanh}/>
            </View>
            <View style={styles.nonbox}>
                <Text>  </Text>
            </View>

            <View style={styles.place}>
                <Text style={styles.textplace}> NHÀ DƯỚI </Text>
            </View>
            <View style={styles.place}>
                
            </View>

            <View style={styles.box}>
                <Button title="BẾP 2" onPress={() => {toggleSwitch_bep2()}} color={backgroundColorbep2}/>
            </View>
            <View style={styles.box}>
                <Button title="BẾP 1" onPress={() => {toggleSwitch_bep1()}} color={backgroundColorbep1}/>
            </View>
            <View style={styles.box}>
                <Button title="KHO" onPress={() => {toggleSwitch_kho()}} color={backgroundColorkho}/>
            </View>
            <View style={styles.box}>
                <Button title="NHÀ TẮM" onPress={() => {toggleSwitch_nhatam()}} color={backgroundColornhatam}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
        marginTop: 20
    },
    place: {
        width: Dimensions.get('window').width / 2 - 6,
        marginTop: 50,
    },
    textplace: {
        fontWeight: 'bold'
    },
    box: {
        margin: 2,
        width: Dimensions.get('window').width / 2 - 6,
        height: 50,
    },
    nonbox: {
        margin: 2,
        width: Dimensions.get('window').width / 2 - 6,
        height: 50,
        backgroundColor: 'white'
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        width: ((Dimensions.get('window').width / 2 - 6) / 4) * 3
    },
    switch: {
        width: (Dimensions.get('window').width / 2 - 6) / 4
    }
}
)