import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        top: 40, // Để tránh che Status Bar
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        zIndex: 10, // Đảm bảo nó luôn nằm trên ảnh
    },

    backButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 10,
        borderRadius: 20,
    },

    menuButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 10,
        borderRadius: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    imageBackground: {
        width: '100%',
        height: 280,
        justifyContent: 'flex-end',
    },
    title: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    ratingContainer: {
        position: 'absolute',
        bottom: 50,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    starIcon: {
        color: '#FFD700',
        fontSize: 18,
        marginRight: 4,
    },
    ratingText: {
        fontSize: 16,
        color: '#fff',
    },
    heartIcon: {
        position: 'absolute',
        top: '94%', // Đặt gần giao điểm giữa ảnh & phần trắng
        left: '85%', // Canh giữa theo chiều ngang
        transform: [{ translateX: -20 }, { translateY: -20 }], // Căn chỉnh vị trí
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    infoContainer: {
        flex: 1,
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#fff',
        marginTop: -25,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    locationIcon: {
        marginRight: 5,
    },
    location: {
        fontSize: 25,
        color: '#007BFF',
        fontWeight: 'bold',
    },
    locationText: {
        fontSize: 18,
        color: '#007BFF',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15, // Tạo khoảng cách từ "Quảng Nam" lên trên
        marginBottom: 50,
    },
    description: {
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
    },
    bottomContainer: {
        position: 'absolute', // Giữ nó cố định dưới cùng
        bottom: 0, // Đặt sát đáy màn hình
        left: 0,
        right: 0,
        flexDirection: 'row', // Căn ngang các phần tử
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#007BFF', // Màu xanh nền
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderTopLeftRadius: 20, // Bo góc trái
        borderTopRightRadius: 20, // Bo góc phải
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff', // Chữ trắng
    },
    perDay: {
        fontSize: 14,
        color: '#fff',
    },
    bookButton: {
        backgroundColor: '#fff', // Nền trắng
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    bookButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF', // Chữ xanh
    },
});
