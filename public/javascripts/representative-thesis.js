class RepresentativeThesis {
    constructor() {

    }

    async makeView() {
        // 서버에서 가져오기
        try {
            const response = await axios
                .get('http://dblp.ourguide.xyz/papers/38135245-8eff-4078-af6a-ea559ffa660b/info');
            const thesisData = response.data;
            console.log('thesisData : ',thesisData);

            // 컨텐츠들 띄우기
            $('.thesis-title-content').text(thesisData.title);
            $('.thesis-author-content').text(thesisData.authors);
            $('.thesis-paper-keyword-content').text(thesisData.keyword);
        } catch (error) {
            console.log(error);
        }
    }

}

const representativeThesis = new RepresentativeThesis();

representativeThesis.makeView();
