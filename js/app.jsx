import React from "react";
import ReactDOM from "react-dom";
require('.././styles/style.scss');
import Footer from './components/Footer/';
import FilmInfo from './components/FilmInfo/';

class MainPage extends React.Component {
    render(){
        return  (
            <div className="container">
                <FilmInfo></FilmInfo>
                <Footer></Footer>
            </div>
        )
    }
}

class Loader extends React.Component {
    render() {
        return (
            <div className="loader">
                <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='200px' height='200px'
                     id='svg4037' viewBox='0 0 249.04 249.04'>
                    <defs id='defs4039'>
                        <linearGradient id='linearGradient3954' y2='-275.26' gradientUnits='userSpaceOnUse'
                                        x2='67.046' gradientTransform='translate(-31.161 -22.363) scale(.89408)'
                                        y1='-288.84' x1='50.205'>
                            <stop id='stop3928' offset='0' stopColor='#eeeeec' />
                            <stop id='stop3930' offset='1' stopColor='#2e3436' />
                        </linearGradient>
                        <linearGradient id='linearGradient3839' y2='58.862' xlinkHref='#linearGradient3829'
                                        gradientUnits='userSpaceOnUse' x2='187.5' gradientTransform='matrix(-.87659 .5061 .5061 .87659 464.45 536.91)'
                                        y1='-148.14' x1='62.5' />
                        <linearGradient id='linearGradient3829'>
                            <stop id='stop3831' offset='0' stopColor='#989a96' />
                            <stop id='stop3833' offset='1' stopColor='#eeeeec' />
                        </linearGradient>
                        <linearGradient id='linearGradient3835' y2='58.862' xlinkHref='#linearGradient3829'
                                        gradientUnits='userSpaceOnUse' x2='187.5' gradientTransform='rotate(-30 1343.986 -184.982)'
                                        y1='-148.14' x1='62.5' />
                        <linearGradient id='linearGradient3850' y2='409.6' gradientUnits='userSpaceOnUse'
                                        x2='327.39' gradientTransform='translate(40.864 166.74)' y1='377.78' x1='274.71'>
                            <stop id='stop3651' offset='0' stopColor='#888a85' />
                            <stop id='stop3653' offset='1' stopColor='#eeeeec' />
                        </linearGradient>
                        <linearGradient id='linearGradient3859' y2='-35.638' gradientUnits='userSpaceOnUse'
                                        x2='214' gradientTransform='translate(217.37 700.22)' y1='-187.14' x1='97'>
                            <stop id='stop3855' offset='0' stopColor='#d3d7cf' />
                            <stop id='stop3857' offset='1' stopColor='#babdb6' />
                        </linearGradient>
                        <linearGradient id='linearGradient3905' y2='-458.64' xlinkHref='#linearGradient3878'
                                        gradientUnits='userSpaceOnUse' x2='175' y1='-458.64' x1='-29' />
                        <linearGradient id='linearGradient3878'>
                            <stop id='stop3880' offset='0' stopColor='#888a85' />
                            <stop id='stop3882' offset='1' stopColor='#888a85' stopOpacity='0' />
                        </linearGradient>
                    </defs>
                    <g id='layer1' transform='translate(-225.48 -436.83)'>
                        <g id='g3898' transform='translate(187.37 1052.2)'>
                            <path id='path3876' d='m174-458.64c0 55.781-45.219 101-101 101s-101-45.219-101-101 45.219-101 101-101 101 45.219 101 101z'
                                  transform='translate(101.52 -96.259) scale(.85294)' fill='#2e3436' />
                            <path id='path3874' d='m174-458.64c0 55.781-45.219 101-101 101s-101-45.219-101-101 45.219-101 101-101 101 45.219 101 101z'
                                  transform='scale(.74895) rotate(29.537 518.011 -278.525)' strokeLinejoin='round'
                                  stroke='url(#linearGradient3905)' strokeWidth='2' fill='none' />
                            <path id='path3886' d='m174-458.64c0 55.781-45.219 101-101 101s-101-45.219-101-101 45.219-101 101-101 101 45.219 101 101z'
                                  transform='rotate(29.537 439.958 -185.665) scale(.68658)' strokeLinejoin='round'
                                  stroke='url(#linearGradient3905)' strokeWidth='2' fill='none' />
                            <path id='path3890' d='m174-458.64c0 55.781-45.219 101-101 101s-101-45.219-101-101 45.219-101 101-101 101 45.219 101 101z'
                                  transform='rotate(29.537 497.712 -160.168) scale(.61726)' strokeLinejoin='round'
                                  stroke='url(#linearGradient3905)' strokeWidth='2' fill='none' />
                            <path id='path3894' d='m174-458.64c0 55.781-45.219 101-101 101s-101-45.219-101-101 45.219-101 101-101 101 45.219 101 101z'
                                  transform='rotate(29.537 572.822 -127.036) scale(.52716)' strokeLinejoin='round'
                                  stroke='url(#linearGradient3905)' strokeWidth='2' fill='none' />
                        </g>
                        <path id='path2846' d='m349.56 440.37c-67.26 0-121.78 54.521-121.78 121.78 0 67.26 54.521 121.78 121.78 121.78 67.26 0 121.78-54.521 121.78-121.78 0-67.26-54.521-121.78-121.78-121.78zm0 15.75c14.403 0 26.094 11.66 26.094 26.062 0 14.403-11.691 26.094-26.094 26.094s-26.094-11.691-26.094-26.094 11.691-26.062 26.094-26.062zm-69.812 39.969c4.6114-0.10641 9.3061 0.99325 13.594 3.4688 12.473 7.2015 16.764 23.183 9.5625 35.656s-23.183 16.733-35.656 9.5312c-12.473-7.2015-16.701-23.12-9.5-35.594 4.726-8.1856 13.196-12.859 22-13.062zm138.31 0c9.2536-0.23881 18.362 4.4871 23.312 13.062 7.2015 12.473 2.9108 28.424-9.5625 35.625-12.473 7.2015-28.424 2.9421-35.625-9.5312-7.2015-12.473-2.9421-28.486 9.5312-35.688 3.8979-2.2505 8.1376-3.3602 12.344-3.4688zm-79.375 39.625c2.8324-0.0736 5.6399 1.3737 7.1562 4 2.2056 3.8201 0.88263 8.7007-2.9375 10.906-3.8201 2.2056-8.7007 0.91389-10.906-2.9062-2.2056-3.8201-0.91388-8.732 2.9062-10.938 1.1938-0.68924 2.4938-1.0291 3.7812-1.0625zm21.344 0c1.4108-0.0301 2.8431 0.30433 4.1562 1.0625 3.8201 2.2056 5.1431 7.1174 2.9375 10.938-2.2056 3.8201-7.0861 5.1118-10.906 2.9062-3.8201-2.2056-5.1431-7.0861-2.9375-10.906 0.68923-1.1938 1.6517-2.1398 2.75-2.8125 1.2081-0.73997 2.5892-1.1574 4-1.1875zm-31.75 18.438c4.4111-0.00001 7.9688 3.5889 7.9688 8s-3.5576 8-7.9688 8c-4.4111 0-8-3.5889-8-8 0-3.0326 1.6665-5.6788 4.1562-7.0312 1.1317-0.61478 2.4653-0.96876 3.8438-0.96875zm42.562 0c4.4111 0 8 3.5889 8 8 0.00001 4.4111-3.5889 8-8 8-4.4111 0.00001-7.9688-3.5889-7.9688-8-0.00001-3.0326 1.6977-5.6788 4.1875-7.0312 1.1317-0.61477 2.4028-0.96875 3.7812-0.96875zm-32.094 18.469c1.418-0.0343 2.8431 0.30434 4.1562 1.0625 3.8201 2.2056 5.1431 7.0861 2.9375 10.906-2.2056 3.8201-7.0861 5.1431-10.906 2.9375-3.8201-2.2056-5.143-7.1174-2.9375-10.938 0.68924-1.1938 1.6205-2.1086 2.7188-2.7812 1.2081-0.73997 2.6133-1.1532 4.0312-1.1875zm21.25 0c2.8324-0.0736 5.6087 1.3424 7.125 3.9688 2.2056 3.8201 0.91388 8.7319-2.9062 10.938-3.8201 2.2056-8.732 0.88264-10.938-2.9375-2.2056-3.8201-0.88263-8.7007 2.9375-10.906 1.1938-0.68923 2.4938-1.0291 3.7812-1.0625zm-80.406 3.4062c9.2536-0.2388 18.361 4.4871 23.312 13.062 7.2015 12.473 2.9108 28.455-9.5625 35.656-12.473 7.2015-28.392 2.8796-35.594-9.5938-7.2015-12.473-2.9733-28.424 9.5-35.625 3.8979-2.2505 8.1376-3.3914 12.344-3.5zm138.62 0c4.6154-0.10407 9.3061 1.0245 13.594 3.5 12.473 7.2015 16.764 23.152 9.5625 35.625s-23.183 16.764-35.656 9.5625-16.733-23.183-9.5312-35.656c4.726-8.1856 13.22-12.833 22.031-13.031zm-68.656 39.969c14.403 0 26.094 11.691 26.094 26.094s-11.691 26.094-26.094 26.094-26.094-11.691-26.094-26.094 11.691-26.094 26.094-26.094z'
                              fill='url(#linearGradient3859)' />
                        <path id='path3644' d='m349.54 528.19c-18.766 0-33.969 15.203-33.969 33.969s15.203 33.969 33.969 33.969 34-15.203 34-33.969-15.234-33.969-34-33.969zm-10.875 7.5312c2.8324-0.0736 5.6399 1.3737 7.1562 4 2.2056 3.8201 0.88263 8.7007-2.9375 10.906-3.8201 2.2056-8.7007 0.91389-10.906-2.9062-2.2056-3.8201-0.91388-8.732 2.9062-10.938 1.1938-0.68924 2.4938-1.0291 3.7812-1.0625zm21.344 0c1.4108-0.0302 2.8431 0.30433 4.1562 1.0625 3.8201 2.2056 5.1431 7.1174 2.9375 10.938-2.2056 3.8201-7.0861 5.1118-10.906 2.9062-3.8201-2.2056-5.1431-7.0861-2.9375-10.906 0.68923-1.1938 1.6517-2.1398 2.75-2.8125 1.2081-0.73997 2.5892-1.1574 4-1.1875zm-31.75 18.438c4.4111-0.00001 7.9688 3.5889 7.9688 8s-3.5576 8-7.9688 8c-4.4111 0-8-3.5889-8-8 0-3.0326 1.6665-5.6788 4.1562-7.0312 1.1317-0.61478 2.4653-0.96876 3.8438-0.96875zm42.562 0c4.4111 0 8 3.5889 8 8 0.00001 4.4111-3.5889 8-8 8-4.4111 0.00001-7.9688-3.5889-7.9688-8-0.00001-3.0326 1.6977-5.6788 4.1875-7.0312 1.1317-0.61477 2.4028-0.96875 3.7812-0.96875zm-32.094 18.469c1.418-0.0343 2.8431 0.30434 4.1562 1.0625 3.8201 2.2056 5.1431 7.0861 2.9375 10.906-2.2056 3.8201-7.0861 5.1431-10.906 2.9375-3.8201-2.2056-5.143-7.1174-2.9375-10.938 0.68924-1.1938 1.6205-2.1086 2.7188-2.7812 1.2081-0.73997 2.6133-1.1532 4.0312-1.1875zm21.25 0c2.8324-0.0736 5.6087 1.3424 7.125 3.9688 2.2056 3.8201 0.91388 8.7319-2.9062 10.938-3.8201 2.2056-8.732 0.88264-10.938-2.9375-2.2056-3.8201-0.88263-8.7007 2.9375-10.906 1.1938-0.68923 2.4938-1.0291 3.7812-1.0625z'
                              fill='url(#linearGradient3850)' />
                        <path id='path3809' d='m295.67 462.13c-0.96676 0.0261-1.9442 0.29313-2.8438 0.8125-2.8787 1.662-3.8808 5.3088-2.2188 8.1875l32.188 63.594c-4.6199 4.636-8.0546 10.463-9.8125 16.969l-71.156 3.9688c-1.2465 0-2.4177 0.35432-3.375 1-1.5955 1.0761-2.625 2.9225-2.625 5 0 3.324 2.676 6 6 6l71.156 3.9688c1.756 6.4992 5.1689 12.335 9.7812 16.969l-32.125 63.594c-1.662 2.8787-0.69115 6.5255 2.1875 8.1875 2.8787 1.662 6.5255 0.69117 8.1875-2.1875l38.969-59.656c3.1346 0.83269 6.447 1.2812 9.8438 1.2812 3.3967 0 6.6779-0.44856 9.8125-1.2812l38.969 59.656c1.662 2.8787 5.3401 3.8495 8.2188 2.1875s3.8495-5.3088 2.1875-8.1875l-32.156-63.594c4.6127-4.6337 8.0252-10.469 9.7812-16.969l71.188-3.9688c3.324 0 5.9688-2.676 5.9688-6-0.00001-3.324-2.6447-6-5.9688-6l-71.188-3.9688c-1.7561-6.4995-5.1686-12.335-9.7812-16.969l32.156-63.594c1.662-2.8787 0.65991-6.5255-2.2188-8.1875-1.9791-1.1426-4.3118-1.0507-6.125 0.0625-0.82419 0.50598-1.5119 1.2254-2.0312 2.125l-39 59.656c-3.1346-0.83268-6.4158-1.2812-9.8125-1.2812-3.3832 0-6.6891 0.42372-9.8125 1.25l-39-59.625c-1.1426-1.9791-3.2169-3.0574-5.3438-3zm54.125 65.312c18.898 0 34.219 15.32 34.219 34.219 0 18.898-15.32 34.219-34.219 34.219-18.898 0-34.188-15.32-34.188-34.219 0-18.898 15.289-34.219 34.188-34.219z'
                              opacity='0.8' strokeLinejoin='round' stroke='#eeeeec' strokeWidth='2' fill='none'
                        />
                        <path id='path3824' d='m288.5 454.83c-58.83 33.97-78.99 109.2-45.02 168.03 33.96 58.83 109.19 78.98 168.02 45.02 58.83-33.97 78.99-109.19 45.02-168.02-33.96-58.83-109.19-78.99-168.02-45.03zm1.5 2.5981c57.4-33.13 130.79-13.47 163.92 43.93 33.14 57.39 13.48 130.78-43.92 163.92s-130.79 13.47-163.92-43.92c-33.14-57.4-13.48-130.79 43.92-163.93z'
                              fill='url(#linearGradient3835)' />
                        <path id='path3837' d='m287.75 453.54c59.55-34.38 135.69-13.98 170.07 45.57 34.38 59.54 13.98 135.69-45.57 170.07s-135.69 13.97-170.07-45.57c-34.38-59.55-13.98-135.7 45.57-170.07zm1.5183 2.6298c-58.095 33.541-78 107.83-44.459 165.92 33.541 58.095 107.83 78 165.92 44.459 58.095-33.541 78-107.83 44.459-165.92-33.541-58.095-107.83-78-165.92-44.459z'
                              fill='url(#linearGradient3839)' />
                        <path id='path3863' d='m387.62 551.62c-1.77-6.4958-5.1899-12.345-9.8125-16.969l32-63.656c1.6559-2.8822 0.66346-6.5316-2.2188-8.1875-0.46555-0.26746-0.94486-0.45882-1.4375-0.59375m-18.531 89.406m-26.438-27.844-0.625 0.96875c-3.1364-0.82598-6.4158-1.2572-9.8125-1.25-3.3832 0.007-6.6909 0.4483-9.8125 1.2812l-39.125-59.562c-1.1468-1.9766-3.217-3.0307-5.3438-2.9688-0.9667 0.0282-1.9453 0.29121-2.8438 0.8125-0.31994 0.18563-0.63358 0.39421-0.90625 0.625m113.44-1.4688m-28.25 126.31c4.6028-4.6435 8.0078-10.465 9.75-16.969l71.188-4.125c3.324-0.007 5.9446-2.7072 5.9375-6.0312-0.007-3.324-2.6447-5.9758-5.9688-5.9688m-80.906 33.094m-27 11.281c3.3967-0.007 6.6796-0.47312 9.8125-1.3125l39.094 59.594c1.6682 2.8751 5.3436 3.8244 8.2188 2.1562m-95.469-88.594 1.4375 0.0625c1.7699 6.4954 5.1903 12.314 9.8125 16.938l-31.969 63.656c-1.6559 2.8822-0.69469 6.5316 2.1875 8.1875m29.719-125.75v0.0312c-4.61 4.6459-8.0373 10.49-9.7812 17l-71.156 4.0938c-1.2465 0.003-2.4191 0.38353-3.375 1.0312-1.5932 1.0795-2.5982 2.9225-2.5938 5 0.00051 0.24019 0.004 0.48615 0.0312 0.71875m113.84-35.187c18.898-0.0404 34.241 15.258 34.281 34.156 0.0404 18.898-15.227 34.241-34.125 34.281-18.898 0.0404-34.21-15.258-34.25-34.156-0.0404-18.898 15.195-34.241 34.094-34.281z'
                              opacity='0.8' strokeLinejoin='round' stroke='#888a85' strokeWidth='2' fill='none'
                        />
                        <g id='g3948' transform='translate(329.37 838.22)'>
                            <path id='path3913' d='m62.225-308.82c0 6.2484-5.0653 11.314-11.314 11.314-6.2484 0-11.314-5.0653-11.314-11.314 0-6.2484 5.0653-11.314 11.314-11.314 6.2484 0 11.314 5.0653 11.314 11.314z'
                                  transform='translate(-16.858 -37.358) scale(.76641)' opacity='0.5' fill='#888a85'
                            />
                            <path id='path3934' d='m62.225-308.82c0 6.2484-5.0653 11.314-11.314 11.314-6.2484 0-11.314-5.0653-11.314-11.314 0-6.2484 5.0653-11.314 11.314-11.314 6.2484 0 11.314 5.0653 11.314 11.314z'
                                  transform='translate(-14.483 -65.069) scale(.68523)' fill='#fff' />
                            <path id='path3915' d='m20.36-282.36c-2.9679 0-5.3645 2.4246-5.3645 5.3924 0 2.5342 1.7469 4.63 4.1072 5.1968v3.3249h2.5146v-3.3249c2.3603-0.56678 4.1072-2.6627 4.1072-5.1968 0-2.9679-2.3966-5.3924-5.3645-5.3924z'
                                  fill='#2e3436' />
                            <path id='path3922' d='m17.587-268.82c-1.2648-0.45501-2.1696-1.0387-3.1867-2.0559-1.0473-1.0473-1.6005-1.9199-2.0556-3.2427-1.8399-5.3477 2.2829-11.14 7.9289-11.14 2.3633 0 4.401 0.83221 6.0325 2.4638 1.6872 1.6872 2.4769 3.5851 2.4769 5.9533 0 2.4075-0.79175 4.3046-2.5288 6.0596-0.92399 0.93346-2.8876 2.0211-3.9908 2.2104l-0.5927 0.10173v-1.5731-1.5731l0.5927-0.18398c2.1023-0.6526 3.6932-3.1679 3.4572-5.466-0.20123-1.9599-1.4163-3.6433-3.2407-4.4896-1.2588-0.58393-3.0438-0.58642-4.2864-0.006-2.7914 1.3039-3.9895 4.6822-2.6193 7.3861 0.48126 0.94972 1.6999 2.0868 2.6582 2.4804l0.75016 0.30807 0.000585 1.541c0.000679 1.7648 0.02989 1.7392-1.3962 1.2261h0.000009z'
                                  fill='url(#linearGradient3954)' />
                        </g>
                    </g>
                </svg>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    render() {
        return (
            this.state.isLoading ? <Loader></Loader> : <MainPage></MainPage>
        )
    }
}

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});