//compile
// javac java_regex.java

//ejecute
//java java_regex

import java.io.BufferedReader;
import java.io.FileReader;
// import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class java_regex {
    public static void main(String[] argrs) {
        Pattern pat = Pattern.compile("^2011\\-.*$");
        String file = "./results.csv";
        int machet = 0;
        int nomatche = 0;
        try {
            BufferedReader br = new BufferedReader(new FileReader(file));
            String line;
            while ((line = br.readLine()) != null) {
                Matcher matcher = pat.matcher(line);
                if (matcher.find()) {
                    machet++;
                    System.out.println(line);
                } else {
                    nomatche++;
                }
            }
            System.out.println("matche: " + machet);
            System.out.println("noMatche: " + nomatche);
            br.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }

}