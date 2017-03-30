export interface BoomProps {
    min: number,
    max: number,
    s1: string,
    s2: string
}

/**
 * Provide to find boom number
 */
export default class Boom {
    /**
     * props holds general properties to find boom number.
     */
    private props: BoomProps;

    /**
     *
     * @param props
     */
    public constructor(props: BoomProps) {
        this.props = props;
    }

    /**
     * Provide to find boom number by the given number.
     * @param k
     * @return {string}
     */
    public find(k: number){
        if(k < this.props.min || k > this.props.max) {
            throw new Error(`Number must between ${this.props.min} and ${this.props.max}`)
        }
        // shift number as 1.
        let sm = (k + 1);
        // find bytes of the number.
        let findValue = ( sm >>> 0).toString(2);
        findValue = Boom.replaceAll(findValue, "0", this.props.s1);
        findValue = Boom.replaceAll(findValue, "1", this.props.s2).slice(1);
        return findValue;
    }

    /**
     * Provides to replace same things by the given regex.
     * @param src
     * @param search
     * @param replacement
     * @return {string|LoDashExplicitWrapper<string>|void}
     */
    public static replaceAll = function(src, search, replacement) {
        return src.replace(new RegExp(search, "g"), replacement);
    };

    /**
     * Gets property of Boom
     * @return {BoomProps}
     */
    getProps(){
        return this.props;
    }
}